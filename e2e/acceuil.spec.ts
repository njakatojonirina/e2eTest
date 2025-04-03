// e2e/example.spec.ts
import { test, expect } from '@playwright/test';

test('Vérifier le titre de la page d’accueil', async ({ page }) => {
  await page.goto('http://localhost:4200');
});
