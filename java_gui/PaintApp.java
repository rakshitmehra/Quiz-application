import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class PaintApp extends JFrame {
    private Color color = Color.BLACK;
    private int size = 10;
    private boolean eraserMode = false;
    private Point lastPoint = null;

    public PaintApp() {
        setTitle("Paint App");
        setSize(800, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout());

        JPanel toolbar = new JPanel();
        toolbar.setLayout(new FlowLayout());
        add(toolbar, BorderLayout.NORTH);

        JButton colorButton = new JButton("Color");
        colorButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                color = JColorChooser.showDialog(null, "Choose a color", color);
            }
        });
        toolbar.add(colorButton);

        JButton sizeButton = new JButton("Size");
        sizeButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String input = JOptionPane.showInputDialog(null, "Enter a size:", size);
                size = Integer.parseInt(input);
            }
        });
        toolbar.add(sizeButton);

        JButton eraserButton = new JButton("Eraser");
        eraserButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                eraserMode = !eraserMode;
                if (eraserMode) {
                    color = Color.WHITE;
                } else {
                    color = Color.BLACK;
                }
            }
        });
        toolbar.add(eraserButton);

        JPanel canvas = new JPanel() {
            public void paintComponent(Graphics g) {
                super.paintComponent(g);
                if (lastPoint != null) {
                    g.setColor(color);
                    g.fillOval(lastPoint.x - size/2, lastPoint.y - size/2, size, size);
                }
            }
        };
        canvas.setBackground(Color.WHITE);
        canvas.addMouseListener(new MouseAdapter() {
            public void mousePressed(MouseEvent e) {
                lastPoint = e.getPoint();
                repaint();
            }
            public void mouseReleased(MouseEvent e) {
                lastPoint = null;
            }
        });
        canvas.addMouseMotionListener(new MouseMotionAdapter() {
            public void mouseDragged(MouseEvent e) {
                Point currentPoint = e.getPoint();
                Graphics g = canvas.getGraphics();
                g.setColor(color);
                g.setStroke(new BasicStroke(size, BasicStroke.CAP_ROUND, BasicStroke.JOIN_ROUND));
                g.drawLine(lastPoint.x, lastPoint.y, currentPoint.x, currentPoint.y);
                lastPoint = currentPoint;
            }
        });
        add(canvas, BorderLayout.CENTER);

        setVisible(true);
    }

    public static void main(String[] args) {
        new PaintApp();
    }
}
