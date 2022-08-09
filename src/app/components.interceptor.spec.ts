import { TestBed } from '@angular/core/testing';

import { ComponentsInterceptor } from './components.interceptor';

describe('ComponentsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ComponentsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ComponentsInterceptor = TestBed.inject(ComponentsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
