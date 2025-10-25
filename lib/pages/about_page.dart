import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class AboutPage extends StatelessWidget {
  const AboutPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'About Me',
              style: Theme.of(context).textTheme.headlineLarge?.copyWith(
                    color: Colors.cyanAccent,
                  ),
            ),
            const SizedBox(height: 20),
            const Text(
              'I’m a Flutter fullstack dev with a passion for building immersive UIs.\n'
              'I love combining code and creativity — kind of like game design, but for the web.',
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.white70),
            ),
            const SizedBox(height: 30),
            TextButton(
              onPressed: () => context.go('/'),
              child: const Text('← Back'),
            ),
          ],
        ),
      ),
    );
  }
}
