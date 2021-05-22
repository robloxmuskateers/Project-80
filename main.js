guestList=[];

function submit() {
    var guestName=document.getElementById("guest_name_input").value;
    guestList.push(guestName);
    console.log(guestName);
    document.getElementById("list_with_commas").innerHTML=guestList;
}

function show() {
    console.log(guestList);
    document.getElementById("list_without_commas").innerHTML=guestList;
}

function show_sorted_list() {
    sortedGuestList=guestList.sort();
    console.log(sortedGuestList);
    document.getElementById("sorted_list").innerHTML=sortedGuestList;
}

function search() {
    var s=document.getElementById("search_name").value;
    var found=0;
    var j;
    for (j=0; j<guestList.length; j++) {
        if (s==guestList[j]) {
            found=found+1;
        }
    }
    document.getElementById("show_search").innerHTML="Name Found "+found+" Time/s";
    console.log("Name Found "+found+" Time/s");
}