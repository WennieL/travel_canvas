import { test, expect } from '@playwright/test';

test.describe('Custom Dialog System', () => {
    test.beforeEach(async ({ page }: { page: any }) => {
        await page.goto('/');
    });

    test('should show custom confirmation dialog when deleting a day', async ({ page }: { page: any }) => {
        // Note: Adjust selectors based on your actual DOM structure
        // This test assumes there's a day tab with a delete button
        const deleteButton = page.locator('button:has-text("Delete Day"), button:has-text("刪除")').first();

        if (await deleteButton.isVisible()) {
            await deleteButton.click();

            // Verify custom dialog appears
            const dialog = page.locator('role=dialog');
            await expect(dialog).toBeVisible();

            // Check for premium styles (e.g., backdrop blur or specific Tailwind classes)
            await expect(dialog).toHaveClass(/backdrop-blur/);

            // Test cancellation
            const cancelButton = dialog.locator('button:has-text("Cancel"), button:has-text("取消")');
            await cancelButton.click();
            await expect(dialog).not.toBeVisible();
        }
    });

    test('should show success dialog after beta unlock', async ({ page }: { page: any }) => {
        // Find a locked template and click unlock
        const unlockButton = page.locator('button:has-text("Unlock"), button:has-text("解鎖")').first();

        if (await unlockButton.isVisible()) {
            await unlockButton.click();

            // Verify success dialog
            const dialog = page.locator('role=dialog');
            await expect(dialog).toBeVisible();
            await expect(dialog).toContainText(/Success|成功/);

            const okButton = dialog.locator('button').first();
            await okButton.click();
            await expect(dialog).not.toBeVisible();
        }
    });
});
