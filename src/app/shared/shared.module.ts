import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthMockService } from './auth-mock/auth-mock.service';

@NgModule({
  imports: [CommonModule],
  providers: [AuthMockService],
  exports: [CommonModule],
})
export class SharedModule {}
