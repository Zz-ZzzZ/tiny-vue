import { test, expect } from '@playwright/test'

test('Collapse 嵌套表单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('collapse#nested-form')

  const content = page.locator('.tiny-collapse-item__content')
  page.waitForTimeout(200)
  await expect(content.locator('.tiny-form')).toBeVisible()
})
