function skillsMember() {
    var member = {
        name: 'Tom',
        age: 20,
        showInfo: function() {
            console.log(this.name + ' ' + this.age);
        }
    };
    member.showInfo();
}