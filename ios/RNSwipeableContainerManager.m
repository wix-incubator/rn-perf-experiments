//
//  RNSwipeableContainerManager.m
//  example
//
//  Created by Tal Kol on 6/18/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RNSwipeableContainerManager.h"
#import "RNSwipeableContainer.h"

@implementation RNSwipeableContainerManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[RNSwipeableContainer alloc] init];
}

@end
