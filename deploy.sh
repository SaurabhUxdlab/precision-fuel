#!/bin/bash

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Precision Fuels Deploy Script${NC}"
echo -e "${BLUE}========================================${NC}\n"

# Check git status
echo -e "${YELLOW}Checking git status...${NC}"
if [ -z "$(git status --porcelain)" ]; then
  echo -e "${GREEN}✓ No uncommitted changes${NC}\n"
else
  echo -e "${RED}✗ Uncommitted changes detected:${NC}"
  git status --short
  echo -e "\n${YELLOW}Please commit your changes first!${NC}"
  exit 1
fi

# Show commit log
echo -e "${YELLOW}Latest commits:${NC}"
git log --oneline -5
echo ""

# Check if already deployed
echo -e "${YELLOW}Checking Netlify deployment status...${NC}"
echo -e "${BLUE}Open your Netlify dashboard to verify the latest deploy:${NC}"
echo -e "${GREEN}https://app.netlify.com/sites/prcision123/overview${NC}\n"

# Confirmation prompt
read -p "$(echo -e ${YELLOW})Ready to push to GitHub? (y/n)$(echo -e ${NC}) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo -e "${YELLOW}Pushing to origin main...${NC}"
  
  if git push origin main; then
    echo -e "${GREEN}✓ Successfully pushed to GitHub!${NC}"
    echo -e "${BLUE}Netlify will automatically deploy the latest changes.${NC}"
    echo -e "${BLUE}Monitor progress at: https://app.netlify.com/sites/prcision123/deploys${NC}\n"
    
    # Wait a moment then show status
    sleep 2
    echo -e "${YELLOW}Checking deploy status in 30 seconds...${NC}"
    sleep 30
    
    echo -e "\n${BLUE}Deploy monitoring:${NC}"
    echo -e "1. Check real-time logs: https://app.netlify.com/sites/prcision123/deploys"
    echo -e "2. View your site: https://prcision123.netlify.app"
    echo -e "3. Check for any build errors in Netlify dashboard\n"
  else
    echo -e "${RED}✗ Push failed - check your GitHub authentication${NC}"
    echo -e "${YELLOW}Try: gh auth login${NC}"
    exit 1
  fi
else
  echo -e "${YELLOW}Deploy cancelled.${NC}"
  exit 0
fi
