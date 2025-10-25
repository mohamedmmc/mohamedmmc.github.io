import 'package:cv_interactif/widgets/particle_background.dart';
import 'package:flutter/material.dart';
import '../core/app_colors.dart';
import '../core/app_values.dart';
import '../widgets/player_intro.dart';
import '../widgets/menu_buttons.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> with SingleTickerProviderStateMixin {
  double _opacity = 0;

  @override
  void initState() {
    super.initState();
    Future.delayed(const Duration(milliseconds: 300), () {
      setState(() => _opacity = 1);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: Stack(
        children: [
          const Positioned.fill(child: ParticleBackground()),
          AnimatedOpacity(
            opacity: _opacity,
            duration: const Duration(seconds: 1),
            child: Center(
              child: Padding(
                padding: const EdgeInsets.all(AppValues.padding),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: const [
                    PlayerIntro(),
                    SizedBox(height: AppValues.sectionSpacing),
                    MenuButtons(),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
