import 'package:flutter/material.dart';
import '../core/app_text_styles.dart';

class PlayerIntro extends StatelessWidget {
  const PlayerIntro({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('👋 Hey, I\'m Mohamed', style: AppTextStyles.headline),
        const SizedBox(height: 12),
        const Text(
          'Flutter Fullstack Developer | Gamer | Creator',
          style: AppTextStyles.subtitle,
          textAlign: TextAlign.center,
        ),
      ],
    );
  }
}
