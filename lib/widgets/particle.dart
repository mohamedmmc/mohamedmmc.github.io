import 'dart:ui';

class Particle {
  Offset position;
  Offset velocity;
  double radius;
  final Paint paint;

  Particle(this.position, this.velocity, this.radius, this.paint);

  void update(Size size) {
    position += velocity;

    // Bounce on edges
    if (position.dx <= 0 || position.dx >= size.width) {
      velocity = Offset(-velocity.dx, velocity.dy);
    }
    if (position.dy <= 0 || position.dy >= size.height) {
      velocity = Offset(velocity.dx, -velocity.dy);
    }
  }
}
