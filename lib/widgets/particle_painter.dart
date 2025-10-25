import 'package:flutter/material.dart';
import 'particle.dart';

class ParticlePainter extends CustomPainter {
  final List<Particle> particles;
  final double linkRadius;

  ParticlePainter(this.particles, this.linkRadius);

  @override
  void paint(Canvas canvas, Size size) {
    for (final p in particles) {
      // Draw particle
      canvas.drawCircle(p.position, p.radius, p.paint);

      // Draw links between nearby particles
      for (final other in particles) {
        if (p == other) continue;
        final dist = (p.position - other.position).distance;
        if (dist < linkRadius) {
          final opacity = 1 - dist / linkRadius;
          final paint = Paint()
            ..color = p.paint.color.withValues(alpha: opacity * 0.5)
            ..strokeWidth = 0.5;
          canvas.drawLine(p.position, other.position, paint);
        }
      }
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => true;
}
