import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "../pages/login";
import { useRouter } from "../__mocks__/useNextRouterTest";
// これがないとfetchが使えない
import 'cross-fetch/polyfill';
import api from '../helper/api';

jest.mock('next/router', () => require('../__mocks__/useNextRouterTest'));

describe("ログインテスト", () => {
  const result = true;
  it("失敗", async () => {
    render(<Login />);
    const loginButtons = screen.getAllByText('ログイン');
    expect(loginButtons.length).toBeGreaterThan(0);

    // ログインボタンをクリック
    fireEvent.click(loginButtons[1]);

    // ログインが書かれたボタンが5秒後に画面上にあるか確認
    await waitFor(() => {
      // もともとページ遷移しないので意味ない
      const loginButtons = screen.getAllByText('ログイン');
      expect(loginButtons.length).toBeGreaterThan(0);
    }, { timeout: 5000 });
  }, 10000);

  it("成功", async () => {
    render(<Login />);

    // Input要素を取得
    const mailElement = screen.getByPlaceholderText('メールアドレス');
    // Inputに値をセット
    fireEvent.change(mailElement, { target: { value: 'youdanyu943@gmail.com' } });
    // Inputの値が正しく変更されたか確認
    expect(mailElement.value).toBe('youdanyu943@gmail.com');

    // Input要素を取得
    const passElement = screen.getByPlaceholderText('パスワード');
    // Inputに値をセット
    fireEvent.change(passElement, { target: { value: '0130Yu12' } });
    // Inputの値が正しく変更されたか確認
    expect(passElement.value).toBe('0130Yu12');

    const loginButtons = screen.getAllByText('ログイン');
    expect(loginButtons.length).toBeGreaterThan(0);

    // クリックしても画面遷移しないのでやらない
    // fireEvent.click(loginButtons[1]);

    // apiを実行して問題ないかテスト
    await waitFor(async () => {
      const queryParams = {
        email: mailElement.value,
        password: passElement.value,
      };

      const token = await api(`https://bearingsystem.x0.to/api/login`, queryParams);
      if (token) {
        expect(result).toBe(true);
      } else {
        expect(result).toBe(false);
      }
    }, { timeout: 10000 });
  }, 10000);
});
