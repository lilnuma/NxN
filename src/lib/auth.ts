import bcrypt from "bcryptjs";
import crypto from "crypto";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const SESSIONS_FILE = path.join(DATA_DIR, "sessions.json");

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: string;
}

interface Session {
  token: string;
  userId: string;
  createdAt: string;
  expiresAt: string;
}

// Read users from file
function readUsers(): User[] {
  ensureDataDir();
  if (!fs.existsSync(USERS_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));
  } catch {
    return [];
  }
}

// Write users to file
function writeUsers(users: User[]): void {
  ensureDataDir();
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Read sessions from file
function readSessions(): Session[] {
  ensureDataDir();
  if (!fs.existsSync(SESSIONS_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(SESSIONS_FILE, "utf-8"));
  } catch {
    return [];
  }
}

// Write sessions to file
function writeSessions(sessions: Session[]): void {
  ensureDataDir();
  fs.writeFileSync(SESSIONS_FILE, JSON.stringify(sessions, null, 2));
}

// Hash a password
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

// Verify a password
export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// Find user by email
export function findUserByEmail(email: string): User | undefined {
  const users = readUsers();
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase());
}

// Find user by ID
export function findUserById(id: string): User | undefined {
  const users = readUsers();
  return users.find((u) => u.id === id);
}

// Create a new user
export async function createUser(
  name: string,
  email: string,
  password: string
): Promise<User> {
  const users = readUsers();

  // Check for existing user
  const existing = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );
  if (existing) {
    throw new Error("A user with this email already exists");
  }

  const passwordHash = await hashPassword(password);
  const user: User = {
    id: `user_${Date.now()}_${crypto.randomBytes(8).toString("hex")}`,
    name,
    email: email.toLowerCase(),
    passwordHash,
    createdAt: new Date().toISOString(),
  };

  users.push(user);
  writeUsers(users);
  return user;
}

// Create a session for a user
export function createSession(userId: string): Session {
  const sessions = readSessions();

  // Clean expired sessions
  const now = new Date();
  const validSessions = sessions.filter(
    (s) => new Date(s.expiresAt) > now
  );

  const token = crypto.randomBytes(32).toString("hex");
  const session: Session = {
    token,
    userId,
    createdAt: now.toISOString(),
    expiresAt: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days
  };

  validSessions.push(session);
  writeSessions(validSessions);
  return session;
}

// Get session by token
export function getSession(token: string): Session | undefined {
  const sessions = readSessions();
  const now = new Date();
  return sessions.find((s) => s.token === token && new Date(s.expiresAt) > now);
}

// Delete a session (logout)
export function deleteSession(token: string): void {
  const sessions = readSessions();
  const filtered = sessions.filter((s) => s.token !== token);
  writeSessions(filtered);
}

// Get user from session token
export function getUserFromToken(token: string): User | undefined {
  const session = getSession(token);
  if (!session) return undefined;
  return findUserById(session.userId);
}

// Get current user from request cookies
export function getUserFromCookies(
  cookieHeader: string | null
): { user: User; token: string } | null {
  if (!cookieHeader) return null;

  const cookies = parseCookies(cookieHeader);
  const token = cookies["advocateai_session"];
  if (!token) return null;

  const user = getUserFromToken(token);
  if (!user) return null;

  return { user, token };
}

// Parse cookie string into object
function parseCookies(cookieString: string): Record<string, string> {
  const cookies: Record<string, string> = {};
  cookieString.split(";").forEach((cookie) => {
    const [key, ...val] = cookie.split("=");
    if (key && val) {
      cookies[key.trim()] = val.join("=").trim();
    }
  });
  return cookies;
}