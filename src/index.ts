import crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  data: string;
  height: number;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {}
}
