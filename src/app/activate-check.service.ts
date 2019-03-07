import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ActivateCheckService implements CanActivate{

    constructor(private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        const courseId = route.paramMap.get("id");
       if (isNaN(+courseId)){
          this.router.navigate(['courses']);
       }
      return true;
    }
}
