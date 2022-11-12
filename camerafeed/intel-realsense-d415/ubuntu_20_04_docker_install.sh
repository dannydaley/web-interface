o "Installing prerequisites"
sudo apt-get update
sudo apt-get install -y \
        ca-certificates \
            curl \
                gnupg \
                    lsb-release \
                        git

echo "remove any previous versions of docker installed with apt"
sudo apt-get remove docker docker-engine docker.io containerd runc

# https://docs.docker.com/engine/install/ubuntu/
echo "Installing Docker engine binaries"
# containerd.io (1.6.9)
curl -O https://download.docker.com/linux/ubuntu/dists/bionic/pool/stable/amd64/containerd.io_1.6.9-1_amd64.deb
# docker-ce-cli (20.10.9)
curl -O https://download.docker.com/linux/ubuntu/dists/bionic/pool/stable/amd64/docker-ce-cli_20.10.9~3-0~ubuntu-bionic_amd64.deb
# docker-ce (20.10.9)
curl -O https://download.docker.com/linux/ubuntu/dists/bionic/pool/stable/amd64/docker-ce_20.10.9~3-0~ubuntu-bionic_amd64.deb
# docker-compose-plugin (2.6.0)
curl -O https://download.docker.com/linux/ubuntu/dists/bionic/pool/stable/amd64/docker-compose-plugin_2.6.0~ubuntu-bionic_amd64.deb

sudo dpkg -i *.deb

# https://docs.docker.com/engine/install/linux-postinstall/
echo "Running Docker post-installation steps"
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
sudo systemctl enable docker.service
sudo systemctl enable containerd.service

echo "cleaning-up *.deb files"
rm *.deb
