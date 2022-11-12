# Web-interface Backend


### nginx reverse proxy on Rpi4
```bash
# ssh into pi (via "Robot Lab" network)
ssh pi@192.168.0.103
```
run on the pi to get it set-up
```bash
# install prerequisites
sudo apt-get update && sudo apt-get install -y git nginx
# start nginx server
sudo /et/init.d/nginx start
# type pi's IP-address (192.168.0.103) into web-browser (must be connected to Robot Lab network!) to validate webserver is up

```


### Debugging notes
detect "ssh-able" hosts on a network
(they must have port 22 open and be configured for ssh!)
```bash
sudo nmap -p 22 192.168.0.0/24
```

References:
- [Host a website on home pi](https://www.tomshardware.com/how-to/host-public-website-raspberry-pi)
- [detect ssh-able hosts](https://serverfault.com/questions/376894/how-to-scan-local-network-for-ssh-able-computers)
