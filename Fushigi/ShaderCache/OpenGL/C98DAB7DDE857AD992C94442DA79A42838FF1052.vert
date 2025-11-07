#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (location = 0) in vec4 in_attr0;
layout (location = 8) in vec4 in_attr8;
layout (location = 12) in vec4 in_attr12;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;


void main()
{
    precise float temp_0;
    precise float temp_1;
    int temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    int temp_6;
    int temp_7;
    uint temp_8;
    uint temp_9;
    int temp_10;
    precise float temp_11;
    int temp_12;
    uint temp_13;
    int temp_14;
    precise float temp_15;
    int temp_16;
    uint temp_17;
    uint temp_18;
    int temp_19;
    precise float temp_20;
    int temp_21;
    uint temp_22;
    int temp_23;
    precise float temp_24;
    int temp_25;
    uint temp_26;
    uint temp_27;
    int temp_28;
    precise float temp_29;
    int temp_30;
    uint temp_31;
    uint temp_32;
    int temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0xEFD87F800807FF05 Ald
    temp_0 = in_attr0.x;
    // 0x000010: 0x4CB0119002371A00 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000018: 0xEFD87F800847FF0B Ald
    temp_3 = in_attr0.y;
    // 0x000028: 0xEFD87F800887FF0D Ald
    temp_4 = in_attr0.z;
    // 0x000030: 0xEFD87F801447FF0C Ald
    temp_5 = in_attr12.y;
    // 0x000038: 0x3848000000470007 Shl
    temp_6 = temp_2 << 4;
    // 0x000048: 0xEF95007068070702 Ldc
    temp_7 = temp_6 + 0x680;
    temp_8 = uint(temp_7) >> 2;
    temp_9 = temp_8 >> 2;
    temp_10 = int(temp_8) & 3;
    temp_11 = vp_c7.data[int(temp_9)][temp_10];
    temp_12 = int(temp_8) + 1;
    temp_13 = uint(temp_12) >> 2;
    temp_14 = temp_12 & 3;
    temp_15 = vp_c7.data[int(temp_13)][temp_14];
    // 0x000050: 0xEF95007048070700 Ldc
    temp_16 = temp_6 + 0x480;
    temp_17 = uint(temp_16) >> 2;
    temp_18 = temp_17 >> 2;
    temp_19 = int(temp_17) & 3;
    temp_20 = vp_c7.data[int(temp_18)][temp_19];
    temp_21 = int(temp_17) + 1;
    temp_22 = uint(temp_21) >> 2;
    temp_23 = temp_21 & 3;
    temp_24 = vp_c7.data[int(temp_22)][temp_23];
    // 0x000058: 0xEF94007068870709 Ldc
    temp_25 = temp_6 + 0x688;
    temp_26 = uint(temp_25) >> 2;
    temp_27 = temp_26 >> 2;
    temp_28 = int(temp_26) & 3;
    temp_29 = vp_c7.data[int(temp_27)][temp_28];
    // 0x000068: 0xEF9400704887070A Ldc
    temp_30 = temp_6 + 0x488;
    temp_31 = uint(temp_30) >> 2;
    temp_32 = temp_31 >> 2;
    temp_33 = int(temp_31) & 3;
    temp_34 = vp_c7.data[int(temp_32)][temp_33];
    // 0x000070: 0x4C68101000070504 Fmul
    temp_35 = temp_0 * vp_c4.data[0].x;
    // 0x000078: 0x4C68101000870506 Fmul
    temp_36 = temp_0 * vp_c4.data[2].x;
    // 0x000088: 0x4C68101000470505 Fmul
    temp_37 = temp_0 * vp_c4.data[1].x;
    // 0x000090: 0x49A0021000170B04 Ffma
    temp_38 = fma(temp_3, vp_c4.data[0].y, temp_35);
    // 0x000098: 0x49A0031000970B08 Ffma
    temp_39 = fma(temp_3, vp_c4.data[2].y, temp_36);
    // 0x0000A8: 0x49A0029000570B06 Ffma
    temp_40 = fma(temp_3, vp_c4.data[1].y, temp_37);
    // 0x0000B0: 0xEFD87F801407FF0B Ald
    temp_41 = in_attr12.x;
    // 0x0000B8: 0x49A0021000270D04 Ffma
    temp_42 = fma(temp_4, vp_c4.data[0].z, temp_38);
    // 0x0000C8: 0x49A0041000A70D08 Ffma
    temp_43 = fma(temp_4, vp_c4.data[2].z, temp_39);
    // 0x0000D0: 0x49A0031000670D06 Ffma
    temp_44 = fma(temp_4, vp_c4.data[1].z, temp_40);
    // 0x0000D8: 0xEFD87F801487FF0D Ald
    temp_45 = in_attr12.z;
    // 0x0000E8: 0x4C58101000370405 Fadd
    temp_46 = temp_42 + vp_c4.data[0].w;
    // 0x0000F0: 0xEFD87F801047FF04 Ald
    temp_47 = in_attr8.y;
    // 0x0000F8: 0x4C58101000B70808 Fadd
    temp_48 = temp_43 + vp_c4.data[2].w;
    // 0x000108: 0x4C58101000770606 Fadd
    temp_49 = temp_44 + vp_c4.data[1].w;
    // 0x000110: 0x59A0010000070502 Ffma
    temp_50 = fma(temp_46, temp_20, temp_11);
    // 0x000118: 0xEFD87F801007FF00 Ald
    temp_51 = in_attr8.x;
    // 0x000128: 0x59A0048000A70808 Ffma
    temp_52 = fma(temp_48, temp_34, temp_29);
    // 0x000130: 0xEFF07F800847FF0C Ast
    out_attr0.y = temp_5;
    // 0x000138: 0x59A0018000170601 Ffma
    temp_53 = fma(temp_49, temp_24, temp_15);
    // 0x000148: 0xEFF07F800807FF0B Ast
    out_attr0.x = temp_41;
    // 0x000150: 0x4C68100C00070207 Fmul
    temp_54 = temp_50 * vp_c3.data[0].x;
    // 0x000158: 0xEFF07F800887FF0D Ast
    out_attr0.z = temp_45;
    // 0x000168: 0x4C58101002070803 Fadd
    temp_55 = temp_52 + vp_c4.data[8].x;
    // 0x000170: 0x4C68100C00470206 Fmul
    temp_56 = temp_50 * vp_c3.data[1].x;
    // 0x000178: 0x4C68100C00870202 Fmul
    temp_57 = temp_50 * vp_c3.data[2].x;
    // 0x000188: 0x4C98079400370009 Mov
    // 0x000190: 0x49A0038C00170105 Ffma
    temp_58 = fma(temp_53, vp_c3.data[0].y, temp_54);
    // 0x000198: 0x4C98079400270007 Mov
    // 0x0001A8: 0x49A0030C00570106 Ffma
    temp_59 = fma(temp_53, vp_c3.data[1].y, temp_56);
    // 0x0001B0: 0x49A0010C00970102 Ffma
    temp_60 = fma(temp_53, vp_c3.data[2].y, temp_57);
    // 0x0001B8: 0x51A0049400570409 Ffma
    temp_61 = fma(temp_47, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x0001C8: 0x49A0028C00270305 Ffma
    temp_62 = fma(temp_55, vp_c3.data[0].z, temp_58);
    // 0x0001D0: 0x51A0039400470407 Ffma
    temp_63 = fma(temp_47, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x0001D8: 0x49A0030C00670306 Ffma
    temp_64 = fma(temp_55, vp_c3.data[1].z, temp_59);
    // 0x0001E8: 0x49A0010C00A70303 Ffma
    temp_65 = fma(temp_55, vp_c3.data[2].z, temp_60);
    // 0x0001F0: 0x49A0049400170009 Ffma
    temp_66 = fma(temp_51, vp_c5.data[0].y, temp_61);
    // 0x0001F8: 0x49A0010C00A70802 Ffma
    temp_67 = fma(temp_52, vp_c3.data[2].z, temp_60);
    // 0x000208: 0xEFF07F800A47FF09 Ast
    out_attr2.y = temp_66;
    // 0x000210: 0x4C58100C00370505 Fadd
    temp_68 = temp_62 + vp_c3.data[0].w;
    // 0x000218: 0x49A003940007000A Ffma
    temp_69 = fma(temp_51, vp_c5.data[0].x, temp_63);
    // 0x000228: 0x4C58100C00770606 Fadd
    temp_70 = temp_64 + vp_c3.data[1].w;
    // 0x000230: 0xEFF07F800A07FF0A Ast
    out_attr2.x = temp_69;
    // 0x000238: 0x4C68100C02870501 Fmul
    temp_71 = temp_68 * vp_c3.data[10].x;
    // 0x000248: 0x4C68100C02470504 Fmul
    temp_72 = temp_68 * vp_c3.data[9].x;
    // 0x000250: 0x4C68100C02070507 Fmul
    temp_73 = temp_68 * vp_c3.data[8].x;
    // 0x000258: 0x4C68100C01C70505 Fmul
    temp_74 = temp_68 * vp_c3.data[7].x;
    // 0x000268: 0x4C58100C00B70303 Fadd
    temp_75 = temp_65 + vp_c3.data[2].w;
    // 0x000270: 0x4C58100C00B70202 Fadd
    temp_76 = temp_67 + vp_c3.data[2].w;
    // 0x000278: 0x49A0008C02970601 Ffma
    temp_77 = fma(temp_70, vp_c3.data[10].y, temp_71);
    // 0x000288: 0xEFF07F800987FF02 Ast
    out_attr1.z = temp_76;
    // 0x000290: 0x49A0020C02570604 Ffma
    temp_78 = fma(temp_70, vp_c3.data[9].y, temp_72);
    // 0x000298: 0x49A0038C02170600 Ffma
    temp_79 = fma(temp_70, vp_c3.data[8].y, temp_73);
    // 0x0002A8: 0x49A0028C01D70605 Ffma
    temp_80 = fma(temp_70, vp_c3.data[7].y, temp_74);
    // 0x0002B0: 0x49A0008C02A70301 Ffma
    temp_81 = fma(temp_75, vp_c3.data[10].z, temp_77);
    // 0x0002B8: 0x49A0020C02670304 Ffma
    temp_82 = fma(temp_75, vp_c3.data[9].z, temp_78);
    // 0x0002C8: 0x49A0000C02270300 Ffma
    temp_83 = fma(temp_75, vp_c3.data[8].z, temp_79);
    // 0x0002D0: 0x49A0028C01E70305 Ffma
    temp_84 = fma(temp_75, vp_c3.data[7].z, temp_80);
    // 0x0002D8: 0x4C58100C02B70101 Fadd
    temp_85 = temp_81 + vp_c3.data[10].w;
    // 0x0002E8: 0x4C58100C02770404 Fadd
    temp_86 = temp_82 + vp_c3.data[9].w;
    // 0x0002F0: 0xEFF07F8007C7FF01 Ast
    gl_Position.w = temp_85;
    // 0x0002F8: 0x4C58100C02370000 Fadd
    temp_87 = temp_83 + vp_c3.data[8].w;
    // 0x000308: 0xEFF07F800787FF04 Ast
    gl_Position.z = temp_86;
    // 0x000310: 0x4C58100C01F70505 Fadd
    temp_88 = temp_84 + vp_c3.data[7].w;
    // 0x000318: 0xEFF07F800747FF00 Ast
    gl_Position.y = temp_87;
    // 0x000328: 0xEFF07F800707FF05 Ast
    gl_Position.x = temp_88;
    // 0x000330: 0xE30000000007000F Exit
    return;
}
