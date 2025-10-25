import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              '👋 Hey, I\'m Mohamed',
              style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                    color: Colors.cyanAccent,
                    fontWeight: FontWeight.bold,
                  ),
            ),
            const SizedBox(height: 16),
            Text(
              'Flutter Fullstack Developer | Gamer | Creator',
              style: TextStyle(color: Colors.white70),
            ),
            const SizedBox(height: 32),
            Wrap(
              spacing: 20,
              children: [
                ElevatedButton(
                  onPressed: () => context.go('/about'),
                  child: const Text('About Me'),
                ),
                ElevatedButton(
                  onPressed: () => context.go('/projects'),
                  child: const Text('Projects'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
