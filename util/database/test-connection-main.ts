import "reflect-metadata";
import { AppDataSource } from "./mysql"; // 경로는 실제 위치에 맞게 조정하세요

async function testConnection() {
  try {
    await AppDataSource.initialize();
    console.log("데이터베이스 연결 성공!");

    // 테스트용 쿼리
    const result = await AppDataSource.query("SHOW TABLES");
    console.log("테이블 목록:", result);

    await AppDataSource.destroy(); // 연결 종료
  } catch (error) {
    console.error("데이터베이스 연결 실패:", error);
  }
}

testConnection();