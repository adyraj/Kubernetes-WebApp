function cmd() {
    var i = document.getElementById("in1").value

    var xhr = new XMLHttpRequest()

    xhr.open("GET", "http://192.168.174.76/cgi-bin/k8s.py?x=" + i, true);

    xhr.send()

    xhr.onload = function() {
        var output = xhr.responseText;
        document.getElementById("d1").innerHTML = output;
    }
}