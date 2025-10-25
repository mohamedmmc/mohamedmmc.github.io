import 'package:flutter/material.dart';

enum DeviceType { iphone, ipad, mac }

class IphonePage extends StatelessWidget {
  const IphonePage({super.key});

  DeviceType _deviceTypeFromWidth(double width) {
    if (width <= 420) return DeviceType.iphone;
    if (width <= 1024) return DeviceType.ipad;
    return DeviceType.mac;
  }

  @override
  Widget build(BuildContext context) {
    final mq = MediaQuery.of(context);
    final device = _deviceTypeFromWidth(mq.size.width);

    switch (device) {
      case DeviceType.iphone:
        return const _IphoneFrame();
      case DeviceType.ipad:
        return const _IpadFrame();
      case DeviceType.mac:
        return const _MacFrame();
    }
  }
}

// Small phone frame - same as original, extracted
class _IphoneFrame extends StatelessWidget {
  const _IphoneFrame();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Center(
        child: Container(
          width: 300,
          height: 600,
          decoration: BoxDecoration(
            color: Colors.black,
            borderRadius: BorderRadius.circular(40),
            border: Border.all(color: Colors.white24, width: 2),
            boxShadow: const [
              BoxShadow(
                color: Colors.black54,
                blurRadius: 20,
                spreadRadius: 5,
              ),
            ],
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(38),
            child: Stack(
              children: [
                // Simulated wallpaper
                Container(
                  decoration: const BoxDecoration(
                    gradient: LinearGradient(
                      colors: [Colors.deepPurple, Colors.blueAccent],
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                    ),
                  ),
                ),

                // Apps grid
                Align(
                  alignment: Alignment.center,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 24.0),
                    child: GridView.count(
                      crossAxisCount: 4,
                      mainAxisSpacing: 16,
                      crossAxisSpacing: 16,
                      shrinkWrap: true,
                      children: List.generate(12, (index) {
                        return Container(
                          decoration: BoxDecoration(
                            color: Colors.white.withValues(alpha: 0.1),
                            borderRadius: BorderRadius.circular(16),
                            border: Border.all(
                              color: Colors.white30,
                              width: 1,
                            ),
                          ),
                          child: Icon(
                            Icons.apps,
                            color: Colors.white.withValues(alpha: 0.8),
                            size: 28,
                          ),
                        );
                      }),
                    ),
                  ),
                ),

                // Dock
                Align(
                  alignment: Alignment.bottomCenter,
                  child: Container(
                    margin: const EdgeInsets.only(bottom: 20),
                    height: 80,
                    width: 240,
                    decoration: BoxDecoration(
                      color: Colors.white.withValues(alpha: 0.2),
                      borderRadius: BorderRadius.circular(40),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: const [
                        Icon(Icons.phone, color: Colors.white, size: 30),
                        Icon(Icons.message, color: Colors.white, size: 30),
                        Icon(Icons.camera_alt, color: Colors.white, size: 30),
                        Icon(Icons.settings, color: Colors.white, size: 30),
                      ],
                    ),
                  ),
                ),

                // Notch
                Align(
                  alignment: Alignment.topCenter,
                  child: Container(
                    margin: const EdgeInsets.only(top: 12),
                    height: 30,
                    width: 120,
                    decoration: BoxDecoration(
                      color: Colors.black,
                      borderRadius: BorderRadius.circular(20),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// Medium tablet frame
class _IpadFrame extends StatelessWidget {
  const _IpadFrame();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black87,
      body: Center(
        child: Container(
          width: 700,
          height: 900,
          decoration: BoxDecoration(
            color: Colors.black,
            borderRadius: BorderRadius.circular(24),
            border: Border.all(color: Colors.white12, width: 2),
            boxShadow: const [
              BoxShadow(
                color: Colors.black54,
                blurRadius: 30,
                spreadRadius: 6,
              ),
            ],
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(22),
            child: Column(
              children: [
                // status bar
                Container(
                  height: 36,
                  color: Colors.black.withValues(alpha: 0.3),
                  alignment: Alignment.centerLeft,
                  padding: const EdgeInsets.symmetric(horizontal: 16),
                  child: const Text('iPad', style: TextStyle(color: Colors.white70)),
                ),
                Expanded(
                  child: Container(
                    decoration: const BoxDecoration(
                      gradient: LinearGradient(
                        colors: [Colors.indigo, Colors.cyan],
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                      ),
                    ),
                    padding: const EdgeInsets.all(24),
                    child: GridView.count(
                      crossAxisCount: 6,
                      mainAxisSpacing: 18,
                      crossAxisSpacing: 18,
                      children: List.generate(18, (index) {
                        return Container(
                          decoration: BoxDecoration(
                            color: Colors.white.withValues(alpha: 0.08),
                            borderRadius: BorderRadius.circular(14),
                            border: Border.all(color: Colors.white24),
                          ),
                          child: Icon(Icons.apps, color: Colors.white70, size: 32),
                        );
                      }),
                    ),
                  ),
                ),
                // Dock
                Container(
                  height: 90,
                  margin: const EdgeInsets.only(bottom: 16, top: 8),
                  width: double.infinity,
                  alignment: Alignment.center,
                  child: Container(
                    height: 70,
                    width: 520,
                    decoration: BoxDecoration(
                      color: Colors.white.withValues(alpha: 0.14),
                      borderRadius: BorderRadius.circular(36),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: const [
                        Icon(Icons.phone, color: Colors.white, size: 34),
                        Icon(Icons.message, color: Colors.white, size: 34),
                        Icon(Icons.camera_alt, color: Colors.white, size: 34),
                        Icon(Icons.settings, color: Colors.white, size: 34),
                        Icon(Icons.mail, color: Colors.white, size: 34),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// Large Mac-like screen
class _MacFrame extends StatelessWidget {
  const _MacFrame();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[900],
      body: Center(
        child: Container(
          width: 1100,
          height: 700,
          decoration: BoxDecoration(
            color: Colors.black,
            borderRadius: BorderRadius.circular(8),
            border: Border.all(color: Colors.white10, width: 2),
            boxShadow: const [
              BoxShadow(
                color: Colors.black54,
                blurRadius: 40,
                spreadRadius: 8,
              ),
            ],
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(6),
            child: Column(
              children: [
                // mac menu bar
                Container(
                  height: 36,
                  color: Colors.black.withValues(alpha: 0.6),
                  padding: const EdgeInsets.symmetric(horizontal: 12),
                  child: Row(
                    children: [
                      Container(width: 12, height: 12, decoration: BoxDecoration(color: Colors.red, borderRadius: BorderRadius.circular(6))),
                      const SizedBox(width: 8),
                      Container(width: 12, height: 12, decoration: BoxDecoration(color: Colors.yellow, borderRadius: BorderRadius.circular(6))),
                      const SizedBox(width: 8),
                      Container(width: 12, height: 12, decoration: BoxDecoration(color: Colors.green, borderRadius: BorderRadius.circular(6))),
                      const Spacer(),
                      const Text('macOS Simulation', style: TextStyle(color: Colors.white70)),
                    ],
                  ),
                ),

                // content area
                Expanded(
                  child: Container(
                    decoration: const BoxDecoration(
                      gradient: LinearGradient(
                        colors: [Colors.blueGrey, Colors.indigo],
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                      ),
                    ),
                    padding: const EdgeInsets.all(20),
                    child: Row(
                      children: [
                        // left sidebar
                        Container(
                          width: 200,
                          decoration: BoxDecoration(
                            color: Colors.black.withValues(alpha: 0.2),
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: ListView(
                            padding: const EdgeInsets.all(12),
                            children: List.generate(6, (i) {
                              return Container(
                                margin: const EdgeInsets.symmetric(vertical: 8),
                                height: 48,
                                decoration: BoxDecoration(
                                  color: Colors.white.withValues(alpha: 0.06),
                                  borderRadius: BorderRadius.circular(8),
                                ),
                              );
                            }),
                          ),
                        ),
                        const SizedBox(width: 18),
                        // main grid
                        Expanded(
                          child: GridView.count(
                            crossAxisCount: 4,
                            mainAxisSpacing: 18,
                            crossAxisSpacing: 18,
                            children: List.generate(12, (index) {
                              return Container(
                                decoration: BoxDecoration(
                                  color: Colors.white.withValues(alpha: 0.06),
                                  borderRadius: BorderRadius.circular(12),
                                ),
                                child: Icon(Icons.apps, color: Colors.white70, size: 36),
                              );
                            }),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                // Dock simulation
                Container(
                  height: 96,
                  alignment: Alignment.center,
                  child: Container(
                    height: 72,
                    width: 760,
                    decoration: BoxDecoration(
                      color: Colors.white.withValues(alpha: 0.06),
                      borderRadius: BorderRadius.circular(36),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: const [
                        Icon(Icons.launch, color: Colors.white70, size: 36),
                        Icon(Icons.email, color: Colors.white70, size: 36),
                        Icon(Icons.folder, color: Colors.white70, size: 36),
                        Icon(Icons.settings, color: Colors.white70, size: 36),
                        Icon(Icons.photo, color: Colors.white70, size: 36),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
