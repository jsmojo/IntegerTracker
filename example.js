

class IntegerTracker {

    constructor() { 
        this.collection = [];
        this.obj = {};
        this.largest = 0;
        this.frequent = 0;
        this.mean = 0;
    }

    track(int) {
        this.obj[int] = this.obj[int]? this.obj[int] += 1: 1;
        if(this.obj[int] >= this.frequent ) {
            this.frequent = this.obj[int];
            this.largest = int;
        }
        this.collection.push(int);
        this.collection.sort();
        this.mean = this.collection.reduce((sum, el) => sum + el, 0) / this.collection.length;
    }

    get_max() {
        return this.collection.slice(this.collection.length - 1);
    }

    get_min() {
        return this.collection.slice(0,1);
    }

    get_mean() {
        return this.mean;
    }

    get_mode() {
        return this.largest;
    }

}


let tracker = new IntegerTracker();
tracker.track(1);
tracker.track(0);
tracker.track(3);
tracker.track(1);

tracker
let max = tracker.get_max()
max
let min = tracker.get_min();
min
let mean = tracker.get_mean();
mean
let largest = tracker.get_mode();
largest

