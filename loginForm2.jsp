<!DOCTYPE html>
<!--전반적으로 수첩같은 디자인을 가져가면 좋을것 같다는 생각이 들었습니다-->
<html lang = "ko">
    <head>
        <meta charset="UTF-8">
        <meta name ="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="st_LF.css">
        <title>Login</title>
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
        <form>
            <table>
                <tr>
                    <td><h2>로그인</h2></td>
                </tr>
                <tr>
                    <td><input type="text" placeholder="ID"></td>
                </tr>
                <tr>
                    <td><input type="password" placeholder=Password></td>
                </tr>
                <tr>
                   <td><input type="checkbox"> 로그인 정보 저장</td>
                </tr>
                <tr>
                    <td><input type="submit" value="Sign in" class="btn" onclick="alert('로그인 성공!')"></td>
                </tr>
                <tr>
                    <td class="join"><a href="creat_account.jsp">회원가입</a></td>
                </tr>
                </table>
        </form>
    </body>
</html>