import java.io.File;
import java.util.Scanner;

public class FileExplorer {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a directory path: ");
        String path = scanner.nextLine();
        File directory = new File(path);
        if (directory.isDirectory()) {
            while (true) {
                System.out.println("\nCurrent directory: " + directory.getAbsolutePath());
                File[] files = directory.listFiles();
                for (File file : files) {
                    if (file.isDirectory()) {
                        System.out.println("[" + file.getName() + "]");
                    } else {
                        System.out.println(file.getName());
                    }
                }
                System.out.print("\nEnter a file or directory name (.. to go up): ");
                String input = scanner.nextLine();
                if (input.equals("..")) {
                    directory = directory.getParentFile();
                } else {
                    File selected = new File(directory.getAbsolutePath() + File.separator + input);
                    if (selected.isDirectory()) {
                        directory = selected;
                    } else {
                        System.out.println("Error: Not a directory.");
                    }
                }
            }
        } else {
            System.out.println("Error: Not a directory.");
        }
    }
}
