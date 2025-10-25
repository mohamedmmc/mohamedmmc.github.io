import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class ProjectsPage extends StatelessWidget {
  const ProjectsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'My Projects',
              style: Theme.of(context).textTheme.headlineLarge?.copyWith(
                    color: Colors.cyanAccent,
                  ),
            ),
            const SizedBox(height: 20),
            const Text(
              'Here I’ll showcase my top Flutter, Node.js, and fullstack projects.\n'
              'You can make this page interactive later — like a game gallery or XP list!',
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
