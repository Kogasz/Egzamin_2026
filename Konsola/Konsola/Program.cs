namespace Konsola
{
    internal class Program
    {
/*
nazwa: funkcji: GenerujHaslo
opis: funkcji: Generuje losowe hasło zawierające małe i wielkie
litery, polskie znaki, cyfry oraz znaki specjalne.
Następnie losowo miesza kolejność znaków hasła.
parametry: brak
zwracany typ i opis: string – wygenerowane hasło.
autor: numer zdającego
*/
        static string GenerujHaslo()
        {
            Random r = new Random();
            string haslo = "";
            string duze = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            string male = "abcdefghijklłmnopqrstuvwxyz";
            string polskiZnaki = "ąęłńóśżźĄĘŁŃÓŚŻŹ";
            string cyfry = "0123456789";
            string znaki = "!@#$%^&*()_+";

            for(int i = 0; i < 3; i++)
            {
                haslo += male[r.Next(26)];
            }
            for (int i = 0; i < 3; i++)
            {
                haslo += duze[r.Next(26)];
            }
            for (int i = 0; i < 2; i++)
            {
                haslo += polskiZnaki[r.Next(polskiZnaki.Length)];
            }
            for (int i = 0; i < 2; i++)
            {
                haslo += cyfry[r.Next(10)];
            }
            for (int i = 0; i < 2; i++)
            {
                haslo += znaki[r.Next(znaki.Length)];
            }
            string losowehaslo = new string(haslo.OrderBy(x=> r.Next()).ToArray());
            return losowehaslo;

        }
/*
nazwa funkcji: Main
opis funkcji: Pięciokrotnie wywołuje funkcję GenerujHaslo()
i wyświetla wygenerowane hasła w konsoli.
parametry: args – tablica argumentów przekazanych do programu,
które nie są wykorzystywane.
zwracany typ i opis: void – funkcja nie zwraca wartości.
autor: numer zdającego
*/
        static void Main(string[] args)
        {
            for(int i = 0;i < 5;i++)
            {
                Console.WriteLine(GenerujHaslo());
            }
        }
    }
}