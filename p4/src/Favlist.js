// /src/Favlist.js modified from Zipfoods 'Cart.js'
export default class Favlist {

    /**
     * 
     */
    constructor() {
        // Extract JSON favlist string from local storage
        let favlist = localStorage.getItem('favlist');

        // Parse JSON favlist String to `favs` object
        this.favs = (favlist) ? JSON.parse(favlist) : [];
    }

    /**
     * Getter method for favs
     */
    getFavs() {
        return this.favs;
    }

    /**
     * Returns how many total favs are in the favlist
     */
    count() {
        let sum = 0;
        for (let key of Object.keys(this.favs)) {
            sum += this.favs[key].quantity;
        }
        return sum;
    }

    /**
     * Updates favlist in localstorage
     */
    update() {
        localStorage.setItem('favlist', JSON.stringify(this.favs));
    }

    /**
     * Add a new fav of the given postId
     */
    toggleFav(postId) {

        // First see if post is already present
        let fav = this.getFav(postId);
        if (fav) {
            this.remove(postId);
        } else {
            //Post not in favlist, add as new fav
            this.favs.push({
                id: postId,
            });
        }

        this.update();
        
    }

    /**
     * Remove an fav from favs via postId
     */
    remove(postId) {
        let fav = this.getFav(postId);

        let favIndex = this.favs.indexOf(fav);

        if (fav) {
            this.favs.splice(favIndex, 1);
            this.update();
        }
    }
    

    /**
     * Get an fav from favs via postId
     * Returns null if post does not exist in favs
     */
    getFav(postId) {
        return this.favs.find(({ id }) => id === postId) || null;
    }
}