##########################################################################
## None of this is required since trunk now natively supports tailwind ##
#########################################################################

!/bin/bash

set -e
source ./scripts/commons.sh

echo -e "$log_prefix Building tailwind stylesheet"
echo "$separator"

bun run tailwindcss -o ./styles/tailwind.css | sed 's/^/> /'

echo "$separator"
