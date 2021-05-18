import java.util.*;

public class Main{
   public  static void main(String[] args) {
       Scanner scan = new Scanner(System.in);
       int n = scan.nextInt();
       int [] tall = new int[n];
       int [] not = new int[n-7];
       int sum = 0 ;

       for ( int i = 0; i < 9; i++) {
            tall[i] = scan.nextInt();
            sum += tall[i];   
       }
       Arrays.parallelSort(tall);

       for ( int i = 0; i < n; i++) {
        for ( int j = i+1; j < n; j++) {
            if ( sum - (tall[i] + tall[j]) == 100) {
                  tall[i] = not[0];
                  tall[j] = not[1];
                }
            }
       }
      
       for ( int i = 0; i < n; i++) {
            if ( tall[i] != not[0] && tall[i] != not[1] ) {
                System.out.println(tall[i]);
            }
       }
    }

}

