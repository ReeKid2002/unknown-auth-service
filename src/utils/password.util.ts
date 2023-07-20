import bcrypt from 'bcrypt';

const generateSalt = (rounds: number) => {
  return bcrypt.genSalt(rounds);
}

const generateHash = async (password: string) => {
  const salt = await generateSalt(10);
  return bcrypt.hash(password, salt);
}

const compareHash = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
}

export default {
  generateHash,
  compareHash,
};
