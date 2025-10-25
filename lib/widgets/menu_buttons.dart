import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../core/app_colors.dart';
import '../core/app_values.dart';

class MenuButtons extends StatelessWidget {
  const MenuButtons({super.key});

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: AppValues.buttonSpacing,
      children: [
        _NeonButton(text: 'About Me', onTap: () => context.go('/about')),
        _NeonButton(text: 'Projects', onTap: () => context.go('/projects')),
        _NeonButton(text: 'Iphone', onTap: () => context.go('/iphone')),
      ],
    );
  }
}

class _NeonButton extends StatefulWidget {
  final String text;
  final VoidCallback onTap;
  const _NeonButton({required this.text, required this.onTap});

  @override
  State<_NeonButton> createState() => _NeonButtonState();
}

class _NeonButtonState extends State<_NeonButton> {
  bool _hovering = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _hovering = true),
      onExit: (_) => setState(() => _hovering = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        decoration: BoxDecoration(
          color: AppColors.buttonBackground.withValues(alpha: _hovering ? 0.4 : 0.2),
          borderRadius: BorderRadius.circular(8),
          boxShadow: _hovering
              ? [
                  BoxShadow(
                    color: AppColors.accent.withValues(alpha: 0.8),
                    blurRadius: 20,
                    spreadRadius: 2,
                  ),
                ]
              : [],
          border: Border.all(
            color: AppColors.accent.withValues(alpha: _hovering ? 0.8 : 0.3),
            width: 1.5,
          ),
        ),
        child: TextButton(
          onPressed: widget.onTap,
          style: TextButton.styleFrom(
            foregroundColor: AppColors.accent,
            padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
            textStyle: const TextStyle(fontSize: 18),
          ),
          child: Text(widget.text),
        ),
      ),
    );
  }
}
