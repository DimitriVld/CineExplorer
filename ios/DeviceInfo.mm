#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <UIKit/UIKit.h>

@interface CustomDeviceInfo : NSObject <RCTBridgeModule>
@end

@implementation CustomDeviceInfo

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getSystemVersion:(RCTPromiseResolveBlock)resolve
                             rejecter:(RCTPromiseRejectBlock)reject) {
  NSString *version = [[UIDevice currentDevice] systemVersion];
  resolve(version);
}

@end
