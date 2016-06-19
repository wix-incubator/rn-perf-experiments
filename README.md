# React Native Performance Experiments

Various performance experiments with React Native over a swipeable card example. The same example is implemented multiple times with a pan responder, direct component manipulation, native container and Animated library.


Full article: https://medium.com/@talkol/performance-limitations-of-react-native-and-how-to-overcome-them-947630d7f440

<img src="http://i.imgur.com/JKY1EnZ.png">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="http://i.imgur.com/nby7Hos.gif">

### Running the demo

* `npm install`
* Open `ios/example.xcodeproj` in Xcode
* It's recommended to run on a real device since the simulator doesn't provide authentic results
* You may have to set your credentials under 
  * `Target example - General - Identity - Team`
  * `Target example - Build Settings - Code Signing Identity`
* Don't forget in `AppDelegate.m` to unremark the `jsCodeLocation` in OPTION 2 if you want to avoid the packager and upload your bundle to the device

### Simulation of stress conditions

Since this app is overly simplified, performance will probably be equally good in all 4 implementaitons. In order to feel the differences between the implementations, the following stress conditions can be simulated:

* Simulate heavy render function - a computationally-intensive block is added to the render function

* Simulate busy bridge every 1 sec - a burst of data is sent over the bridge every 1 second
