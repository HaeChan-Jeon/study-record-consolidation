using System;
//네임스페이스 선언부
// 네임스페이스: 자주 사용하는 네임스페이스를 위쪽에 미리 선언해 둘 수 있음

namespace HelloWorld
{
    class HelloWorld
    {//{중괄호 사용: 프로그램 범위를 그룹화 // 프로그램 범위(스코프)를 구분 지음
        static void Main(string[] args) //Main() 메서드 // 프로그램의 시작 지점이며, 반드시 있어야 함
        {
            Console.WriteLine("Hello World!"); //세미클론: 명령어의 끝 // 명령어(문, 문장)의 끝을 나타냄
        }
    }
}