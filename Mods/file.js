var script_url = "https://script.google.com/macros/s/AKfycbwomVjIQHoXUNc1ISnMCNOd7YXHSoqgeXpH3bGI1kHY3fb-5ZkTdD_7u2bF5Pje64it/exec";
function search_value() {
    var url = script_url + "?action=read";
    var package_name = $(".package_name");
    var package_upload_date = $(".package_upload_date");
    var package_version = $(".package_version");
    var package_icon = $(".package_icon")
    var package_size = $(".package_size")
    var package_link = $(".package_link")
    var package_mod_info = $(".package_mod_info")
    var package_categories = $(".package_categories")

    var tags = []

    check_point = 1;


    $.getJSON(url, function (json) {
        for (var i = 0; i <= json.records.length; i++) {
            if (requested_package == json.records[i].package_name) {
                check_point = 0
                package_icon.attr("src", json.records[i].package_icon)
                package_name.append(json.records[i].package_name)
                package_version.append(json.records[i].package_version)
                package_size.append(json.records[i].package_size + "MB")
                package_link.attr("href", json.records[i].package_link)
                package_upload_date.append(json.records[i].package_upload_date)
                package_mod_info.append(json.records[i].package_mod_info)
                tags = (json.records[i].package_categories.split(','))
                tags.forEach(element =>{
                    var categories = document.createElement("span");
                    categories.className = "tags";
                    categories.innerHTML = element[0].toUpperCase() + element.slice(1, element.length);
                    $(".package_categories").append(categories)
                })

            }
            if (check_point == 1) {
                console.log("Package not found!")
            }

            $("#loader").css("display", "none")
            $("#main_body").css("display", "block")
        }
    })
}