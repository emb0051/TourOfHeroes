import { NgModule } from '@angular/core';
import { HeroService } from './services';
import { MessageService } from './services/message.service';

// declare var angular: ng.IAngularStatic;

@NgModule({
    providers: [HeroService, MessageService],
    exports: []
})
export class SharedModule {

}
// angular.module('app.shared', [])
//     .factory('heroService')
