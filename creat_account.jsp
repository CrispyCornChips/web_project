<!DOCTYPE html>
<html lang="ko">
<head>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="st_CA.css">
<title>Join</title>
</head>
<body>
    <header>
        <h1>Festival Calendar</h1>
        <nav>
            <a href="#">월별 축제</a>
            <a href="#" class="active">내 계정</a>
            <button id="loginButton">로그인</button>
        </nav>
    </header>
<form action="loginForm.jsp">
    <table>
    <tr>
        <td><h2>회원가입</h2></td>
    </tr>
    <tr><td>아이디</td></tr>
    <tr><td><input type="text" class="text"></td></tr>
    <tr><td>비밀번호</td></tr>
    <tr><td><input type="password" class="text"></td></tr>
    <tr><td>비밀번호 확인</td></tr>
    <tr><td><input type="password" class="text"></td></tr>
    <tr><td>이름</td></tr>
    <tr><td><input type="text" class="text"></td></tr>
    <tr><td>생년월일</td></tr>
    <tr><td><input type="date" class="text"></td></tr>
    <tr><td>이메일</td></tr>
    <tr>
        <td><input type="text" class="email"> @ 
            <select>
                <option>naver.com</option>
                <option>gmail.com</option>
                <option>daum.net</option>
                <option>nate.com</option>
            </select>
        </td>
    </tr>
    <tr><td><input type="submit" value="가입하기" class="btn" onclick="alert('가입 성공!')"></td></tr>
    </table>
</form>
</body>
</html>