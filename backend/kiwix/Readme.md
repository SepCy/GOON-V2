# Make sure to follow the instruction to run this code

1. `sudo apt install kiwix-serve`
2. `sudo apt update`
3. dowload or copy and past the zim file your have into de data/zim folder
4. open the crontab `crontab -e`
5. add the following command `-	@reboot kiwix-serve --port 3003 /relative_path_to_the_kiwix_folder/data/zim/zim_file_name.zim`
6. save and close the editor
