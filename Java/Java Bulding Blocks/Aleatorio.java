import java.util.Random;
import java.util.Scanner;

public class Aleatorio {
    public static void main(String[] args) {
		
		Scanner leer = new Scanner(System.in);
        System.out.println("Cuantos numeros aleatorios requiere?");
        int num = leer.nextInt();
		System.out.println("Ingresa el limite inferior: ");
        int min = leer.nextInt();
        System.out.println("Ingresa el limite superior: ");
        int max = leer.nextInt();
		Random random = new Random();
        for(int i=1; i<=num; i++){
            int numAleatorio = random.nextInt(max - min) + min;
            String numeroA = "Valor[" + i + "] :" + numAleatorio; 
		    System.out.println(numeroA);
        }		
    }
}
