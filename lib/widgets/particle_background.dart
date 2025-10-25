import 'dart:math';
import 'package:flutter/material.dart';
import 'particle.dart';
import 'particle_painter.dart';

class ParticleBackground extends StatefulWidget {
  const ParticleBackground({super.key});

  @override
  State<ParticleBackground> createState() => _ParticleBackgroundState();
}

class _ParticleBackgroundState extends State<ParticleBackground> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  final List<Particle> _particles = [];
  final Random _rand = Random();
  final int particleCount = 90;
  final double linkRadius = 180;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(days: 1),
    )..addListener(_updateParticles);

    _controller.forward();
  }

  void _updateParticles() {
    setState(() {
      final size = MediaQuery.of(context).size;
      for (final p in _particles) {
        p.update(size);
      }
    });
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (_particles.isEmpty) _initParticles();
  }

  void _initParticles() {
    final size = MediaQuery.of(context).size;
    for (int i = 0; i < particleCount; i++) {
      final position = Offset(
        _rand.nextDouble() * size.width,
        _rand.nextDouble() * size.height,
      );
      final velocity = Offset(
        (_rand.nextDouble() - 0.5) * 1.2,
        (_rand.nextDouble() - 0.5) * 1.2,
      );
      final paint = Paint()..color = Colors.grey[300]!;
      _particles.add(
        Particle(position, velocity, 2 + _rand.nextDouble() * 2, paint),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return CustomPaint(
      painter: ParticlePainter(_particles, linkRadius),
      child: Container(),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }
}
