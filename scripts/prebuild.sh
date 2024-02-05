##########################################################################
## None of this is required since trunk now natively supports tailwind ##
#########################################################################

!/bin/bash

source ./scripts/commons.sh


if ! command -v "bun" &> /dev/null
then
    echo "$log_prefix Bun installation not found, installing"
    
    set -e
    curl -fsSL https://bun.sh/install | bash
    set +e
fi

echo -e "$log_prefix Installing tailwindcss CLI"
echo $separator

bun install -g tailwindcss | sed 's/^/> /'

echo $separator

bun run tailwindcss --help &> /dev/null

if [ $(echo $?) -ne 0 ]; 
then
    echo "$error_prefix Failed to install tailwindcss CLI"
    exit 1
fi
