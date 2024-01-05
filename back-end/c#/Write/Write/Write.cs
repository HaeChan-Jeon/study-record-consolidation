using System;

class Write
{
    static void Main(string[] args)
    {
        Console.Write("줄 바꿈 없음");
        Console.WriteLine("줄 바꿈 포함");
        Console.WriteLine("줄\n바꿈");

        Console.WriteLine("공백 무시");
        Console.    WriteLine   (   "공백 무시" )   ;
        Console.
            WriteLine(
                "공백 무시")
            ;

        /*
         * \n 한 줄 내리기
         * \t 들여쓰기
         * \r 줄의 시작으로 이동(캐리지 리턴)
         * \' 작은따옴표 문자 하나 출력
         * \" 큰따옴표 문자 하나 출력
         */
    }
}