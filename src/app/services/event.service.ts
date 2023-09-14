import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class EventService implements OnDestroy {
    
    private handleDeleteEvent = new BehaviorSubject<String>('');

    deleteFile(name: String) {
        this.handleDeleteEvent.next(name);
    }

    deleteFileListener() {
        return this.handleDeleteEvent.asObservable();
    }

    ngOnDestroy(): void {
        this.handleDeleteEvent.complete();
    }
}