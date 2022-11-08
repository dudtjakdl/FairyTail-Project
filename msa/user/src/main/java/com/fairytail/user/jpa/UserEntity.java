package com.fairytail.user.jpa;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;


@Entity
@Getter
@NoArgsConstructor
@Table(name = "user")
public class UserEntity {

    @Builder
    public UserEntity(String email,
                      String username, Integer block_cnt,
                      Integer status) {
        this.email = email;
        this.username = username;
        this.block_cnt = block_cnt == null ? 0 : block_cnt;
        this.status = status == null ? 0 : status;
    }


    @Id
    @Column(name = "userid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 계정
    @Column(nullable = false, unique = true)
    private String email;

    // 이름
    @Column(nullable = false)
    private String username;

    // 신고횟수
    private Integer block_cnt;

    // 활성화여부
    // 0: 활성화 / 1: 비활성화 / 2: 신고로 비활성화
    private Integer status;

}
