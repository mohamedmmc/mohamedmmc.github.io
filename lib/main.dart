import 'package:flutter/material.dart';
import 'router.dart';

void main() {
  runApp(const MyPortfolioApp());
}

class MyPortfolioApp extends StatelessWidget {
  const MyPortfolioApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Mohamed MMC | Portfolio',
      theme: ThemeData(
        colorScheme: ColorScheme.dark(
          primary: Colors.cyanAccent,
          secondary: Colors.deepPurpleAccent,
        ),
        fontFamily: 'RobotoMono', // gamer/coder vibe
      ),
      routerConfig: router,
      debugShowCheckedModeBanner: false,
    );
  }
}
