#!/bin/sh
date
echo -n > ip.txt
echo -n > ip_sort.txt
for i in $(seq 1 3)
do
    echo "reading page "$i"..."
    url='http://proxy-list.org/english/search.php?search=CN.ssl-yes&country=CN&ssl=yes&p='$i
    ips=$(curl --silent $url | grep -P "Proxy\('.*'\)" | cut -d"'" -f2)
    if [ $ips=="" ]
    then
        url='http://proxy-list.org/english/search.php?search=CN&country=CN&p='$i
        ips=$(curl --silent $url | grep -P "Proxy\('.*'\)" | cut -d"'" -f2)
    fi 
    for ip64 in $ips
    do
        ip_port=$(echo $ip64|base64 -d )
        ip=$(echo $ip_port|cut -d":" -f1)
        time=$(curl -m 3 -x $ip_port -o /dev/null -s -w "%{time_total}:%{size_download}\n" "http://img.xiami.net/images/album/img23/78523/21003555471467278253_5.jpg")
        echo $ip_port":"$time >> ip.txt
    done
done
echo "sorting..."
cat ip.txt|sort -t: -k3 -nu|grep -v -P :$:0$ > ip_sort.txt
ip=$(head -n1 ip_sort.txt|cut -d":" -f1,2)
sed -i-e 's/\([0-9]\{1,3\}\.\)\{3\}[0-9]\{1,3\}:[0-9]\{1,\}/'$ip'/g' proxy_pac.pac
echo "========"

